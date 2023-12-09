import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { storeExpense, updateExpense, deleteExpense } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const [error, setError] = useState();

  const [isSubmitting, setIsSubmitting] = useState(false)

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {

    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId);
      expensesCtx.deleteExpense(editedExpenseId);

    } catch (err) {
      setError('Unable to delete - Please try after some time');
      setIsSubmitting(false);
    }
    navigation.goBack();

  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({ ...expenseData, id });
      }
      navigation.goBack();

    } catch (err) {
      setError('Unable to update expense - please try after some time')
      setIsSubmitting(false)
    }
  }

  if (isSubmitting) {
    return <LoadingOverlay />
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={faTrash}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});

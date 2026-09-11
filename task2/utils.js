export const calculateSum = (numbers) => numbers.reduce((sum, num) => sum + num, 0);

export const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  return calculateSum(numbers) / numbers.length;
};
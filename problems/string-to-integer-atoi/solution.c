int myAtoi(char *str) {
  while (*str == ' ') {
    str++;
  }

  char sign = '+';
  if (*str == '+' || *str == '-') {
    sign = *str;
    str++;
  }

  int current = 0;
  int result = 0;
  while (*str >= '0' && *str <= '9') {
    current = *str - '0';
    if (result < -214748364 || result == -214748364 && current > 8) {
      result = -2147483648;
      break;
    } else if (result > 214748364 || result == 214748364 && current > 7) {
      result = 2147483647;
      break;
    } else {
      result *= 10;
      result += sign == '+' ? current : -current;
      str++;
    }
  }

  return result;
}

#include <stdlib.h>
#include <string.h>

int strStr(char *haystack, char *needle) {
  // Initialize pointers to characters in the strings
  char *haystackCurr;
  char *needleCurr;
  // Calculate the length of each string
  int len = strlen(haystack) - strlen(needle);

  // Iterate through each starting character of the haystack
  for (int startIndex = 0; startIndex <= len; startIndex++) {
    haystackCurr = haystack + startIndex;
    needleCurr = needle;
    // While the characters match, continue incrementing
    while (*needleCurr && *haystackCurr == *needleCurr) {
      haystackCurr++;
      needleCurr++;
    }
    // If the end of the needle is reached, then we have a match
    if (*needleCurr == NULL) {
      return startIndex;
    }
  }

  return -1;
}
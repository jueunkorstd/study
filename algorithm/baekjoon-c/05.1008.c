
#include "stdio.h"

main() {
  int a, b;
  scanf("%d %d", &a, &b);
  printf("%.9f\n", (double)a / b);
  return 0;
}
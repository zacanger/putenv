#include <stdlib.h>

int wrapper(char *kv) {
  int ret = putenv(kv);
  return ret;
}

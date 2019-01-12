#include <node_api.h>
#include <stdlib.h>

int main(int argc, char **argv) {
  int ret = putenv(argv[1]);
  return ret;
}

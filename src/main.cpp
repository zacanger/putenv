#include <napi.h>
#include <cstdlib>

Napi::Value Wrapper(const Napi::CallbackInfo& info){
  Napi::Env env = info.Env();

  string toPut = info[0].As<Napi::String>();
  putenv(toPut);
  return 0;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(
    Napi::String::New(env, "wrapper"),
    Napi::Function::New(env, Wrapper)
  );
  return exports;
}

NODE_API_MODULE(addon, Init);

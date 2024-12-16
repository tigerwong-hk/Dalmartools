const { generateKey } = await import("node:crypto");

(() => {
  generateKey("aes", { length: 256 }, (err, key) => {
    if (err) {
      throw err;
    }

    console.log(
      `Secret Key (${key.symmetricKeySize ? key.symmetricKeySize.toString() : "undefined"}): ${key.export().toString("base64")}`,
    );
  });
})();

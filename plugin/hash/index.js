import md5 from "crypto-js/md5";
import sha1 from "crypto-js/sha1";
import sha256 from "crypto-js/sha256";

Object.defineProperty (Function, "hash", {value: function () {}});
Object.defineProperty (Function.hash, "md", {value: md5});
Object.defineProperty (Function.hash, "sha", {value: sha1});
Object.defineProperty (Function.hash, "__sha", {value: sha256});
Object.defineProperty (Function.hash, "password", {value: function (input, offset, length) { return Function.hash.md (Function.hash.md (Function.hash.md (input))).concat ("-").concat (Function.hash.sha (Function.hash.sha (Function.hash.sha (input)))).concat ("-").concat (Function.hash.__sha (Function.hash.__sha (Function.hash.__sha (input)))).substr (offset, length); }});
Object.defineProperty (Function.hash, "shuffle", {value: function (... option) { var shuffle = [], char = String.char.alpha.numeric, length = Function.hash.shuffle.length; for (var i in option) { if (Object.is.string (option [i])) char = option [i]; else if (Object.is.integer (option [i])) length = option [i]; else shuffle; } for (var i = 0; i < length; i ++) shuffle.push (char.rand ()); return shuffle.join (""); }});
Object.defineProperty (Function.hash.shuffle, "length", {value: 24});

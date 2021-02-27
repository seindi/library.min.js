import md5 from 'crypto-js/md5'
import sha1 from 'crypto-js/sha1'
import sha256 from 'crypto-js/sha256'

Function.Crypto = {
	md: md5,
	sha: sha1,
	__sha: sha256,
	}

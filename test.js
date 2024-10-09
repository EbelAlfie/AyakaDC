import { join } from "node:path"
import { readFileSync } from "node:fs"
import { JSEncrypt } from "nodejs-jsencrypt"

function encrypt(args) {
    const { message, publicKey } = args
    const rsa = new JSEncrypt()
    rsa.setPublicKey(publicKey)
    let encrypted = rsa.encrypt(message)

    console.log(encrypted)
}
function main() {
    let message = "davis.onde.wei@gmail.com"
    let path = join(import.meta.dirname, "raw/public.pem")
    let publicKey = readFileSync(path, "utf8")
    console.log(publicKey)

    let args = {
        message: message,
        publicKey: publicKey
    }

    encrypt(args)
}

main()
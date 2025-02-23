import { getImage } from '../request/steamApi'

export const imageUrl2Base64 = async (url:string):Promise<string> => {
  return new Promise(async (resolve, reject) => {
    let image:any = await getImage(url)
    let _base64 = Buffer.from(image).toString('base64')
    resolve(_base64)
  })
}

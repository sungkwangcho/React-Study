import Chance from 'chance'
const chance = new Chance()

export const randomUUID = () => chance.guid()
export const randomName = () => chance.name()
export const randomEamil = () => chance.email()
export const randomId = () => chance.fbid() // facebood Id
export const randomJobTitle = () => chance.profession()
export const randomCompanyName = () => chance.company()
export const randomSentence = (words = 5) => chance.sentence({words})
export const randomTitleText = (words = 3) => chance.sentence({words})
export const randomParagraphs = (sentences = 3) => chance.paragraph({sentences})

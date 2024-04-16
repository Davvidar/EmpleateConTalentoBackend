import db from "../database/db";

const CardsModel = {

    getAllCards: async () => {
        const [result, metadata] = await db.query('SELECT * FROM cards');
        return result;
    },
 /*   addCard: async (title: string, description: string, image: string) => {
        const [result, metadata] = await db.query('INSERT INTO cards (title, description, image) VALUES (?, ?, ?)', [title, description, image]);
        return result;
    }
     getCardById: async (title: String) => {
        const [result, metadata] = await db.query('SELECT * FROM cards WHERE id = ?', [title]);
        return result;
    },
*/
}
export default CardsModel
import db from "../database/db";

import { DataTypes } from "sequelize";

const modelsOf = db.define('blogs', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
})

export default modelsOf
import { DataType, DataTypes } from "sequelize/types"
import bd from "../dataBase/bd.js"

const RutinesModel = bd.define("rutines", {
  //name: { type: DataTypes.STRING },
  //contrasenia: { type: DataTypes.TEXT },
  //email: { type: DataTypes.TEXT },
})

export default RutinesModel

import { Sequelize } from "sequelize";
import { NUMBER } from "sequelize";
import { Model, STRING, DataTypes } from "sequelize";
import sequelize from "../../utils/postgres";

interface att {
  id?: number;
  name: string,
  caption: string,
  url: string,
  createdAt?: string,
  deleted?: boolean
}

class Meme extends Model<att> implements att {
  public id: number;
  public name!: string;
  public caption!: string;
  public url!: string;
  public createdAt: string;
  public deleted: boolean
}

Meme.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    caption: {
      type: STRING,
      allowNull: false,
    },
    url: {
      type: STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now')
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    sequelize,
    modelName: "memes",
  }
);

export default Meme;

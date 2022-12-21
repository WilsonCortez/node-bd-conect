import {Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/pg'; 

export interface PhasesInstances extends Model{
    id: number;
    author: string;
    txt: string;
}

export const phases = sequelize.define<PhasesInstances>('phases', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.STRING
    },
    txt: {
        type: DataTypes.STRING
    },
},
    {
        tableName: 'phases',
        timestamps: false
    }
);
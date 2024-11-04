import { Sequelize, DataTypes, Model } from 'sequelize';
import { config } from '../config.js';

export const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: 'mysql',
  }
);

// Post 모델
export class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: true, // FIXME: auth 기능 구현 후 false로 수정
    },
  },
  {
    sequelize, // 연결된 Sequelize 인스턴스 전달
    modelName: 'Post', // 모델 이름
    tableName: 'posts', // 실제 데이터베이스의 테이블 이름
    timestamps: true, // createdAt, updatedAt 자동 생성 여부
  }
);

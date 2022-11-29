import { atom } from "jotai";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("blb.db");

export const sliteDB = atom(db);

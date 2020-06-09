import { config, DotenvConfigOutput } from 'dotenv';

const { parsed }: DotenvConfigOutput = config();

export default parsed;
import logger from './util/logger';
import { JSONParser } from './parsers/jsonParser';
import util from 'node:util';
import { XMLParser } from './parsers/xmlParser';
import * as path from 'path';

// Read and log JSON data
async function json() {
    try {
        const data = JSONParser.parseJSONFile("src/data/cake_orders.json");
        console.log(util.inspect(data, { showHidden: false, depth: null, colors: true }));
        // You can also use logger if you prefer
        // logger.info(data);
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
}

json();

// async function xml() {
//     const parser = new XMLParser();
//     const filePath = path.resolve(__dirname, 'data', 'toy orders.xml');
//     try {
//         const res = await parser.parseFile(filePath);
//         console.log(util.inspect(res, false, null));
//     } catch (error) {
//         console.error('Error parsing XML:', error);
//     }
// }

// xml();

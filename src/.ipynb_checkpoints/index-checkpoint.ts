import express from 'express';
import csv from 'csvtojson';
import {promises as fs} from 'fs';

const app = express();
const port = 3000;

const inputCSVFile = './users.csv';
const outputJSONFile = './users.json';

app.get('/convert', async (req:express.Request, res:express.Response) => {
    const jsonArray = await csv().fromFile(inputCSVFile);
    
    const processedArray = await jsonArray.map((user: {first_name: string, last_name: string, phone: string}) => {
            let phone = user.phone;
            if(user.phone == ''){
                phone = 'missing data';
            }
        
            return {
                first_name: user.first_name,
                last_name: user.last_name,
                phone: phone
            }
    });

    await fs.writeFile(outputJSONFile, JSON.stringify(processedArray));
    res.send("Conversion complete successfully!");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
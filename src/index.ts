import { server } from './server/Server';
import fs from 'fs';

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
	console.log(`Servidor 🪁 na 🚪:${PORT}`);
});

fs.readFile('banner.txt', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data);
});
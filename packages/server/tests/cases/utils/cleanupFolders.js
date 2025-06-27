import { promises as fs } from "fs";
import path from "path";

/**
 * Smaže všechny složky v poli createdFolders z filesystemu (pokud existují).
 * @param {string[]} createdFolders - pole relativních cest ke složkám
 */
export async function cleanupFolders(createdFolders) {
    console.info("Provedu úklid testovacích složek...", createdFolders);
    for (const folder of createdFolders) {
        const relPath = "../www/data/" + folder;
        const absPath = path.resolve( relPath );
        // console.info(`Mazání složky: relativní: ${relPath}, absolutní: ${absPath}`);
        try {
            // Zkontroluj existenci složky
            let exists = false;
            try {
                const stat = await fs.stat(absPath);
                exists = stat.isDirectory();
            } catch (e) {
                exists = false;
            }
            if (exists) {
                await fs.rm(absPath, { recursive: true, force: true });
                console.info(`DELETED: ${absPath}`);
            } else {
                console.info(`NOT EXISTING: ${absPath}`);
            }
        } catch (e) {
            console.warn(`ERROR ${folder}:`, e.message);
        }
    }
    if (createdFolders.length) {
        console.info("Testovací složky byly promazány.");
    }
}

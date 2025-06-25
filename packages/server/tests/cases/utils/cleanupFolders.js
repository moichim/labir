import { promises as fs } from "fs";

/**
 * Smaže všechny složky v poli createdFolders z filesystemu (pokud existují).
 * @param {string[]} createdFolders - pole relativních cest ke složkám
 */
export async function cleanupFolders(createdFolders) {
    console.info("Provedu úklid testovacích složek...", createdFolders);
    for (const folder of createdFolders) {
        try {
            await fs.rm("packages/server/www/data/" + folder, { recursive: true, force: true });
        } catch (e) {
            // složka neexistuje nebo jiná chyba, ignoruj
            console.warn(`Chyba při mazání složky ${folder}:`, e.message);
        }
    }
    if (createdFolders.length) {
        console.info("Testovací složky byly promazány.");
    }
}

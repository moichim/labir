
/**
 * Celkově framy začínají na indexu 25 (tam je timestamp prvního snímku)
 * Počet byte v hlavičce: 53
 * Data začínají na: 54
 */
export interface ILrcFrame {
    /** 
     * Časová značka snímku 
     * - int64
     * - absolute 25
     * - in frame 0
     */
    timestamp: number,

    /** 
     * Teplotní rozsah snímku, minimum; jednotky jsou podle streamu 
     * - float
     * - absolute 33
     * - in frame 8
     */
    min: number,

    /** 
     * Teplotní rozsah snímku, maximum; jednotky jsou podle streamu 
     * - float
     * - absolute 37
     * - relative 12
     */
    max: number,

    /** 
     * Měřicí rozsah kamery, minimum [K] 
     * - float
     * - absolute 41
     * - relative 16
     */
    modeMinInKelvin: number,

    /** 
     * Měřicí rozsah kamery, maximum [K] 
     * - float
     * - absolute 45
     * - relative 20
     */
    modeMaxInKelvin: number,

    /** 
     * Emisivita [0-1] 
     * - float
     * - absolute 49
     * - relative 24
     */
    emissivity: number,

    /** 
     * Odražená teplota [K] 
     * - float
     * - absolute 53
     * - relative 28
     */
    reflectedTemperaatureInKelvin: number,

    /** 
     * Vzdálenost [m] 
     * - float
     * - absolute 57
     * - relative 32
     */
    distance: number,

    /** 
     * Teplota atmosféry [K]
     * - float
     * - absolute 61
     * - relative 36
     */
    atmosphereTemperatureInKelvin: number,

    /** 
     * Rel. vlhkost [0-1] 
     * - float
     * - absolute 65
     * - relative 40
     */
    relativeHumidity: number,

    /** 
     * Tau (propustnost atmosféry) [0-1] 
     * - float
     * - absolute 69
     * - relative 44
     */
    tau: number,

    /** 
     * Teplota okénka [K] 
     * - float
     * - absolute 73
     * - relative 48
     */
    windowTemperature: number,

    /** 
     * Propustnost okénka [0-1] 
     * - float
     * - absolute 77
     * - relative 52
     */
    windowTransmissivity: number,

    /** 
     * Je tau nastaveno? Typicky 0, není nastaveno, počítá se z parametrů atmosféry.
     * - uint8
     * - absolute 81
     * - relative 53
     */
    isTauSet: number,

    /** 
     * Teplotní data 
     * - float[]
     * - absolute 82
     * - relative 54
     * - délka podle data typu streamu
     */
    pixels: number[]

}
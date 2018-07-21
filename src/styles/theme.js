const colors = {
    blue: '#006EFF',
    green: '#22CE8B',
    red: '#F46363',
    orange: '#ffa63a',
    white: '#FFFFFF',
    offWhite: '#F9FAFC',
    lightestGray: '#F0F2F7',
    lightGray: '#DCE1EA',
    mediumGray: '#A6B1C2',
    mediumBlueGray: '#646D82',
    darkGray: '#040E28'
}

const functionalColors = {
    success: colors.green,
    warning: colors.orange,
    error: colors.red
}

const textColors = {
    dark: colors.darkGray,
    medium: colors.mediumBlueGray,
    light: colors.mediumGray,
    white: colors.white
}

const textSizes = {
    h1: '24px',
    h2: '22px',
    h3: '20px',
    h4: '18px',
    p: '16px',
    input: '15px',
    button: '15px',
    label: '12px'
}

const textWeights = {
    h1: '400',
    h2: '300',
    h3: '400',
    h4: '400',
    p: '400',
    input: '400',
    button: '500',
    label: '400'
}

const backgroundGrays = {
    dark: colors.lightGray,
    medium: colors.lightestGray,
    light: colors.offWhite
}

const buttonStyles = {
    background: {
        default: colors.blue,
        secondary: colors.green,
        warning: functionalColors.error,
        disabled: backgroundGrays.medium
    },
    fontColor: {
        default: textColors.white,
        secondary: textColors.white,
        warning: textColors.white,
        disabled: textColors.light
    },
    hoverFontColor: {
        default: colors.lightGray,
        secondary: colors.lightGray,
        warning: colors.lightGray,
        disabled: colors.mediumGray
    }
}

const inputStyles = {
    borderColor: {
        default: backgroundGrays.dark,
        focused: colors.blue,
        error: functionalColors.error,
        success: functionalColors.success,
        disabled: backgroundGrays.medium
    },
    background: {
        default: colors.white,
        disabled: backgroundGrays.light
    },
    placeholder: textColors.light,
    fontColor: textColors.dark,
    fontSize: textSizes.input
}

export { colors, textColors, textSizes, textWeights, backgroundGrays, buttonStyles, 
    inputStyles, functionalColors };

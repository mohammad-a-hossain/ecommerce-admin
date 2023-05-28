// theme setting for the project

// using tailwind colors shades
export const colorsDark={
    grey:{
        DEFAULT: '#6B7280',
        50: '#C2C2C2',
        100: '#B8B8B8',
        200: '#A3A3A3',
        300: '#8F8F8F',
        400: '#7A7A7A',
        500: '#666666',
        600: '#4A4A4A',
        700: '#2E2E2E',
        800: '#121212',
        900: '#000000',
        950: '#000000'
    },

    primary:{
        DEFAULT: '#6366F1',
        50: '#FFFFFF',
        100: '#F9F9FE',
        200: '#D3D4FB',
        300: '#AEAFF8',
        400: '#888BF4',
        500: '#6366F1',
        600: '#3034EC',
        700: '#1317D1',
        800: '#0E119E',
        900: '#0A0C6A',
        950: '#070950'
    },
    secondary:{
        DEFAULT: '#F59E0B',
        50: '#FCE4BB',
        100: '#FBDCA8',
        200: '#FACD81',
        300: '#F8BD59',
        400: '#F7AE32',
        500: '#F59E0B',
        600: '#C07C08',
        700: '#8A5906',
        800: '#543603',
        900: '#1E1401',
        950: '#030200'
    },


}


// function for theme this can reverse the color from light to dark

function reverseColorsTokens(colorsDark){

    const  reversedTokens={}

    Object.entries(colorsDark).forEach(([key,val]) => {
        const keys= Object.keys(val)
        const values = Object.values(val) 
        const length= keys.length
        const reversedObject={}
        for(let i=0; i < length; i++){
            reversedObject[keys[i] = values[length -i -1]]
        }
        reversedTokens[key]= reversedObject 

        return reversedTokens
    })


}

export const colorsLight= reverseColorsTokens(colorsDark)




// mui theme settings 

export const themeSettings= (mode) =>{

    return{
        palette:{
            mode:mode,
            ...(mode === 'dark' ? {
                //palette values for dark mode 
                primary:{
                    ...colorsDark.primary,
                    main:colorsDark.primary[400],
                    light:colorsDark.primary[400]
                },
                secondary:{
                    ...colorsDark.secondary[300],
                    main:colorsDark.secondary[300]
                },
                neutral:{
                    ...colorsDark.grey,
                    main:colorsDark.grey[500]
                }
            }:{
                    // palette color for light mode 
                    primary: {
                        ...colorsLight.primary,
                        main:colorsDark.grey[50],
                        light: colorsDark.grey[100],
                      },
                      secondary: {
                        ...colorsLight.secondary,
                        main: colorsDark.secondary[600],
                        light: colorsDark.secondary[700],
                      },
                      neutral: {
                        ...colorsLight.grey,
                        main: colorsDark.grey[500],
                      },
                      background: {
                        default: colorsDark.grey[0],
                        alt: colorsDark.grey[50],
                      },
            })
        },
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
              fontFamily: ["Inter", "sans-serif"].join(","),
              fontSize: 40,
            },
            h2: {
              fontFamily: ["Inter", "sans-serif"].join(","),
              fontSize: 32,
            },
            h3: {
              fontFamily: ["Inter", "sans-serif"].join(","),
              fontSize: 24,
            },
            h4: {
              fontFamily: ["Inter", "sans-serif"].join(","),
              fontSize: 20,
            },
            h5: {
              fontFamily: ["Inter", "sans-serif"].join(","),
              fontSize: 16,
            },
            h6: {
              fontFamily: ["Inter", "sans-serif"].join(","),
              fontSize: 14,
            },
          },
    }
}
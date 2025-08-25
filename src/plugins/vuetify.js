
/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'
import { pt } from 'vuetify/locale'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  locale: {
    locale: 'pt',
    messages: {
      pt: {
        ...pt,
        $vuetify: {
          dataIterator: {
            rowsPerPageText: 'Itens por Página',
          },
          dataFooter: {
            itemsPerPageText: 'Itens por Página',
            pageText: ''
          }
        }
      }
    }
  },
  date: {
    locale: {
      pt: 'pt-BR'
    }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#2563EB',
          secondary: '#22C55E',
          action: '#F97316',
          error: colors.red.darken2,
          warning: colors.orange.lighten1,
          success: colors.lightGreen.lighten1
        }
      },
      dark: {
        light: false,
        colors: {
          primary: '#2563EB',
          secondary: '#22C55E',
          action: '#F97316',
          error: colors.red.darken2,
          warning: colors.orange.lighten1,
          success: colors.lightGreen.lighten1
        }
      }
    },
  },
  defaults: {
      VBtn: {
        style: 'font-family: Inter, Nunito, Poppins, sans-serif;',
      },
      VCard: {
        style: 'font-family: Inter, Nunito, Poppins, sans-serif;',
      },
      VTextField: {
        style: 'font-family: Inter, Nunito, Poppins, sans-serif;',
      },
      // Adicione outros componentes conforme necessário
    }
})

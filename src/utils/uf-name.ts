export function getUfName(region: string) {
  switch (region.toLowerCase()) {
    case 'acre':
      return 'AC'
    case 'alagoas':
      return 'AL'
    case 'amapá':
      return 'AP'
    case 'amazonas':
      return 'AM'
    case 'bahia':
      return 'BA'
    case 'ceará':
      return 'CE'
    case 'distrito federal':
      return 'DF'
    case 'espírito santo':
      return 'ES'
    case 'goiás':
      return 'GO'
    case 'maranhão':
      return 'MA'
    case 'mato grosso':
      return 'MT'
    case 'mato grosso do sul':
      return 'MS'
    case 'minas gerais':
      return 'MG'
    case 'pará':
      return 'PA'
    case 'paraíba':
      return 'PB'
    case 'paraná':
      return 'PR'
    case 'pernambuco':
      return 'PE'
    case 'piauí':
      return 'PI'
    case 'rio de janeiro':
      return 'RJ'
    case 'rio grande do norte':
      return 'RN'
    case 'rio grande do sul':
      return 'RS'
    case 'rondônia':
      return 'RO'
    case 'roraima':
      return 'RR'
    case 'santa catarina':
      return 'SC'
    case 'são paulo':
      return 'SP'
    case 'sergipe':
      return 'SE'
    case 'tocantins':
      return 'TO'
    default:
      return ''
  }
}

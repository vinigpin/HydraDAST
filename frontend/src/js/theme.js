// theme.js - Definição de Identidade Visual DAST Inteligente
export const theme = {
  // Bases: 90% da interface deve usar estas cores
  background: {
    main: '#0D1117',      // Fundo da página (Deep Dark)
    surface: '#161B22',   // Cards, menus laterais e modais
    overlay: '#010409',   // Fundo de inputs ou áreas de código
    border: '#30363D',    // Linhas sutis de separação
  },

  // Texto: Contraste balanceado para não cansar a vista
  text: {
    primary: '#C9D1D9',   // Texto padrão (Cinza claro)
    secondary: '#8B949E', // Labels, descrições e textos menos importantes
    onDark: '#FFFFFF',    // Texto em botões coloridos
  },

  // Identidade: Onde a "Inteligência" e a "Ação" aparecem
  brand: {
    primary: '#58A6FF',   // Azul Elétrico: Botões de "Run Scan", links
    ai: '#8957E5',        // Roxo: Indicação de NLP, Insights do Gemini, Reforço
  },

  // Status (Severidade): Usar apenas em badges, ícones ou bordas de erro
  severity: {
    critical: '#F85149',  // SQLi, RCE (Vermelho)
    high: '#F0883E',      // XSS, Auth (Laranja)
    medium: '#D29922',    // Info Disclosure (Amarelo/Ouro)
    low: '#388BFD',       // Header missing (Azul claro)
    safe: '#3FB950',      // Patch aplicado ou campo limpo (Verde)
  }
};
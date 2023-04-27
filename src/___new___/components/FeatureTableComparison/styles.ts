export default {};

export const sectionOuterStyles = (hasDarkBg: boolean) => ({
  flexDirection: 'column',
  h: 'auto',
  w: '100%',
  bg: hasDarkBg ? 'linear-gradient(105.96deg, #0964AD 56.79%, #06547A 100%)' : 'tigeraGrey.100',
  pb: '60px',
});


export const thStyle = (isDarkMode: boolean) => ({
  color: isDarkMode ? 'tigeraWhite' : 'tigeraGrey.800',
});


export const tableContainerStyle = {
  justifyContent: 'center',
  maxWidth: '1093px',
  alignSelf: 'center',
  alignItems: 'center',
  m: [3, 4, 8],
};

export const checkStyle = {
  textAlignLast: 'center',
};
export const headerTextStyle = {
  textAlign: 'center',
  pt: 14,
  mb: 4,
};

export const headerTextStyleSmall = {
  fontSize: '26px',
  pt: 4,
  mb: 2,
};

export const subHeaderTextStyle = {
  fontWeight: '600',
  textAlign: 'center',
  mt: 7,
  fontSize: '2xl',
  lineHeight: 9,
};

export const innerTextStyle = {
  textAlign: 'center',
  fontSize: 'xl',
  fontWeight: 'normal',
  color: 'tigeraGrey.800',
  mx: '44px',
  mb: 10,
  mt: 2,
  lineHeight: 8,
};

export const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  pt: '44px',
};

export const rowStyle = {
  width: ['22vw', '32vw', '32vw', '49vw', '600px'],
};

export const actionBoxStyles = {
  mb: 14,
  justifyContent: 'center',
};

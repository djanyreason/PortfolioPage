import { Box, Tab, Paper, ThemeProvider, Typography } from '@mui/material';
import { TabList, TabPanel, TabContext } from '@mui/lab';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import Content from './Content';
import { createPortfolioTheme } from '../../PortfolioTheme/util';

const PersonalDetail = () => {
  const theme = createPortfolioTheme({
    typography: {
      fontFamily: ['cursive', 'Englebert', 'Patrick Hand'],
      h6: {
        fontSize: '1.75rem',
      },
      body1: {
        marginBottom: '0.5rem',
        fontSize: '1.25rem',
        color: '#333333',
      },
    },
  });

  const tabbedSections = [
    { label: 'Biographical\nSummary', content: <Content /> },
    { label: 'Education\nHistory', content: 'Education' },
    { label: 'Employment\nHistory', content: 'Employment' },
    { label: 'Technical\nSkills', content: 'Skills' },
    { label: 'Personal\nInterests', content: 'Interests' },
  ];

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const viewport = useSelector(({ display }) => display);

  return (
    <Paper
      elevation={16}
      sx={{
        p: 1.5,
        my: 1.5,
        ...(viewport === 'Mobile'
          ? {}
          : { flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }),
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            ...(viewport === 'Mobile'
              ? {}
              : { width: '33%', maxWidth: '8rem' }),
          }}
        >
          <TabList
            onChange={handleChange}
            variant='scrollable'
            orientation={viewport === 'Mobile' ? 'horizontal' : 'vertical'}
            visibleScrollbar={viewport === 'Mobile'}
            textColor='secondary'
            indicatorColor='secondary'
          >
            {tabbedSections.map((section, index) => (
              <Tab
                key={index}
                label={
                  <Typography component={'pre'} sx={{ fontSize: '0.75rem' }}>
                    {section.label}
                  </Typography>
                }
                value={index}
                wrapped
                sx={{ color: '#98A3A5' }}
              />
            ))}
          </TabList>
        </Box>
        <ThemeProvider theme={theme}>
          {tabbedSections.map((section, index) => (
            <TabPanel value={index} key={index} sx={{ px: '12px', py: '0px' }}>
              {section.content}
            </TabPanel>
          ))}
        </ThemeProvider>
      </TabContext>
    </Paper>
  );
};

export default PersonalDetail;

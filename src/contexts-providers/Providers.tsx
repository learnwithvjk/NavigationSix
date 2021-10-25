import React from 'react';
import {Routes} from 'src/routes/Routes';
import {AuthProvider} from 'src/contexts-providers/Auth/AuthProvider';
interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

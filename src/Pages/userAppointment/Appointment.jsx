import React from 'react'
import LeftPage from '../../components/LeftSide/LeftSide'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const Appointment = () => {
    return (
        <div className='flex px-10 bg-gray-100 h-[450px] '>
            <LeftPage />
            <div className='lg:ml-[250px]  overflow-hidden'>
                <div className='flex gap-[500px] p-5'>
                    <h1 className='text-4xl font-bold text-blue-500'>My Appointments</h1>
                    <div className='flex pl-[150px]'>
                        <p className='p-2 font-thin '>Number of records</p>
                        <Box sx={{ minWidth: 50 }}>
                            <FormControl fullWidth>

                                <NativeSelect
                                    defaultValue={30}
                                    inputProps={{
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={10}>10</option>
                                    <option value={20}>12</option>
                                    <option value={30}>13</option>
                                </NativeSelect>
                            </FormControl>
                        </Box>
                    </div>
                </div>

                <div className='bg-white text-center p-4 border'>
                    <p>No appointments are made yet</p>
                </div>
            </div>
            <div />
        </div>
    )
}

export default Appointment
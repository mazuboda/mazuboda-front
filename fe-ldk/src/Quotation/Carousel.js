import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import SCHLikeLion from './logo.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            SCHLikeLion,
    },
    {
        label: '',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        // 캐러셀 너비 조정 maxWidth
        <Box sx={{ maxHeight: '100%', maxWidth: '50%', flexGrow: 1 }}>
            {/* 캐러셀 바디 */}
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                className='h-100'
            >
                {images.map((step, index) => (
                    <div key={step.label} className='h-100'>
                        {Math.abs(activeStep - index) <= 2 ? (
                            // 이미지 박스
                            <Box
                                component="img"
                                sx={{
                                    height: '1080px',
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            {/* End of 캐러셀 바디 */}
            {/* 캐러셀 푸터 */}
            <MobileStepper
                style={{
                    width: '100%',
                    height: '100px',
                }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="medium"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
            {/* End of 캐러셀 푸터 */}
        </Box>
    );
}

export default Carousel;
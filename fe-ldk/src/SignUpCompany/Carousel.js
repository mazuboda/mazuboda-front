import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import SCHLikeLion from '../Quotation/logo.jpg'
import styled from 'styled-components';

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

const CarouselContainer = styled.div`
    position:relative;
`;

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep===maxSteps){ setActiveStep(0); }
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        if (activeStep===0){ setActiveStep(maxSteps-1); }
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        // 캐러셀 너비 조정 maxWidth
        <Box sx={{ maxHeight: '700px', maxWidth: '700px', flexGrow: 1, border:'1px solid black'}}>
            {/* 캐러셀 컨테이너 */}
            <CarouselContainer>
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
                                    height: '700px',
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
                    style={{ width: '100%', height: '50px', backgroundColor: '#FFE9E9', color: 'white', position:'absolute', bottom:'0'}}
                    steps={maxSteps}
                    // position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                        size="small"
                        onClick={handleNext}
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
                        <Button size="small" onClick={handleBack}>
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
            </CarouselContainer>
            {/* end of 캐러셀 컨테이너 */}
        </Box>
    );
}

export default Carousel;

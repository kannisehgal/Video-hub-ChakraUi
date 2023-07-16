import { Heading, Stack, VStack, Text, Button} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const Videos = () => {

    const videosArr = [
        'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',

        'https://www.youtube.com/watch?v=IC7kXsnYCWk&vl=en'
    ];

  const [videoSrc,setVideoSrc] = useState(videosArr[0]);
    
  return  (
  
    <Stack direction={["column","row"]} h={'100vh'}>

        <VStack w={'full'}>
            <video 
                controls
                controlsList="nodownload"
                src={videoSrc} 
                style={{
                    width: '100%',
                }}
            ></video>

        
            <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
                <Heading>Sample Video 1</Heading>
                <Text>
                    This is the sample video for testing and demo.this is called description.
                </Text>
            </VStack>

        </VStack>

        <VStack 
            w={['full', 'xl']} 
            alignItems={"stretch"} 
            p="8" 
            spacing={"8"} 
            overflowY={'auto'}
        >

            {videosArr.map((item,index)=>(
                <Button 
                    variant={'ghost'} 
                    colorScheme={'purple'} 
                    onclick={() => setVideoSrc(item)}
                >
                    Lecture {index + 1}
                </Button>
            ))}

        </VStack>

    </Stack>
  );
};

export default Videos;
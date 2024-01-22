import React from 'react'
import {
  Card,
  Text,
  Box,
  Button,
  ButtonGroup,
} from '@shopify/polaris'

const Welcome: React.FC = () => {
  return (
    <div className='bg-[#FEFCFA] px-[6%] py-10'>
      <h1 className='text-2xl font-bold line-clamp-2 text-[#4A4A4A]'>
        Welcome, John Mathew!!
      </h1>
      <div className='flex gap-4 my-10'>
        <Box width='332px'>
          <Card roundedAbove='sm' background='bg-surface'>
            <Text as='h2' variant='headingSm'>
              Online store dashboard
            </Text>
            <Box paddingBlock='200'>
              <Text as='p' variant='bodyMd'>
                Your order details from the last 30 days have been successfully
                synced. Check them out now!
              </Text>
            </Box>
            <Box paddingBlockStart='200'>
              <Button
                variant='primary'
                onClick={() => {}}
                accessibilityLabel='Add tracking number'
              >
                Add tracking number
              </Button>
            </Box>
          </Card>
        </Box>
        <Box width='332px'>
          <Card roundedAbove='sm' background='bg-surface-caution'>
            <div className='flex'>
              <img src='/alert.svg' />
              <h2 className='text-[#5E4200] font-bold'>
                Customize Customer Notification
              </h2>
            </div>
            <Box paddingBlock='200'>
              <p className='text-[#5E4200]'>
                Tailor Your Email Experience: Set the Sender Email and Choose
                Notification Triggers
              </p>
            </Box>
            <Box paddingBlockStart='200' >
              <Button
                variant='primary'
                
                accessibilityLabel='Add tracking number'
              >
                Add tracking number
              </Button>
            </Box>
          </Card>
        </Box>
        <Box width='332px'>
          <Card roundedAbove='sm' background='bg-surface-info'>
            <div className='flex'>
              <img src='/info.svg' />
              <h2 className='text-[#4A4A4A] font-bold'>
                Your Tracking Link has been generated
              </h2>
            </div>
            <Box paddingBlock='200'>
              <Text as='p' variant='bodyMd'>
                Include the{' '}
                <span className='text-blue-500 underline'>Link</span> to Your
                Store's Navigation <br /> Menu.
              </Text>
            </Box>

            <Box paddingBlock='100'>
              <ButtonGroup>
                <Button variant='secondary' accessibilityLabel='Copy Link'>
                  Copy Link
                </Button>

                <Button
                  variant='primary'
                  accessibilityLabel='Add tracking number'
                >
                  Add tracking number
                </Button>
              </ButtonGroup>
            </Box>
          </Card>
        </Box>
      </div>
    </div>
  )
}

export default Welcome

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  List,
  ListItem,
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Experience } from '../data/resume';

const MotionBox = motion(Box);

const timelineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Resume() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textMuted = useColorModeValue('gray.600', 'gray.400');
  const lineColor = useColorModeValue('gray.300', 'gray.600');
  const badgeBg = useColorModeValue('white', 'gray.700');

  return (
    <Box as="section" id="resume" bg={useColorModeValue('gray.100', 'gray.900')} py={20}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 10 }}>
        <Heading textAlign="center" mb={14}>
          Resume
        </Heading>

        <Flex align="flex-start" gap={10}>
          {/* Sticky heading */}
          <Box
            position="sticky"
            top="120px"
            minW="180px"
            display={{ base: 'none', lg: 'block' }}
          >
            <Heading size="md">Experience</Heading>
          </Box>

          {/* Timeline */}
          <Box position="relative" w="100%">
            {/* Vertical Line */}
            <Box
              position="absolute"
              left="24px"
              top="0"
              bottom="0"
              w="2px"
              bg={lineColor}
            />

            <Stack spacing={10}>
              {Experience.map((exp, index) => (
                <MotionBox
                  key={`${exp.company}-${exp.date}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={timelineVariants}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  position="relative"
                  pl="80px"
                >
                  {/* Logo Badge */}
                  <Box
                    position="absolute"
                    left="0"
                    top="24px"
                    w="48px"
                    h="48px"
                    bg={badgeBg}
                    borderRadius="full"
                    boxShadow="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        boxSize="28px"
                        objectFit="contain"
                      />
                    )}
                  </Box>

                  {/* Card */}
                  <Box
                    bg={cardBg}
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                  >
                    {/* Header */}
                    <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
                      <Heading size="sm">{exp.company}</Heading>
                      <Text fontSize="sm" color={textMuted}>
                        {exp.date}
                      </Text>
                    </Flex>

                    <Divider my={3} />

                    {/* Role */}
                    <Text fontSize="sm" color={textMuted} mb={3}>
                      {exp.position} · {exp.location}
                    </Text>

                    {/* Bullets */}
                    <List spacing={2} pl={4} styleType="disc">
                      {exp.experience.map((item, i) => (
                        <ListItem key={i} fontSize="sm">
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </MotionBox>
              ))}
            </Stack>
          </Box>
        </Flex>
      </Box>

      {/* PRINT / PDF SUPPORT */}
      <style>
        {`
          @media print {
            body {
              background: white !important;
            }
            #resume {
              padding: 0 !important;
            }
            #resume * {
              color: black !important;
              box-shadow: none !important;
            }
          }
        `}
      </style>

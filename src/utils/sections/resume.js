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

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Resume() {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const muted = useColorModeValue('gray.600', 'gray.400');
  const lineColor = useColorModeValue('gray.300', 'gray.600');
  const badgeBg = useColorModeValue('white', 'gray.700');

  return (
    <Box as="section" id="resume" w="100%" bg={bg} py={20}>
      {/* MAIN CONTAINER — wider like old CSS */}
      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 12 }}>
        <Heading textAlign="center" mb={16}>
          Resume
        </Heading>

        <Flex align="flex-start" gap={12}>
          {/* STICKY SIDE TITLE */}
          <Box
            position="sticky"
            top="120px"
            minW="200px"
            display={{ base: 'none', lg: 'block' }}
          >
            <Heading size="md">Experience</Heading>
          </Box>

          {/* TIMELINE */}
          <Box position="relative" w="100%">
            {/* Vertical line */}
            <Box
              position="absolute"
              left="20px"
              top="0"
              bottom="0"
              w="2px"
              bg={lineColor}
            />

            <Stack spacing={12}>
              {/* EXPERIENCE */}
              {Experience.map((exp, index) => (
                <MotionBox
                  key={`${exp.company}-${exp.date}`}
                  position="relative"
                  pl={{ base: '48px', md: '72px' }}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  {/* LOGO BADGE */}
                  <Box
                    position="absolute"
                    left="0"
                    top="28px"
                    w="96px"
                    h="48px"
                    bg={badgeBg}
                    borderRadius="md"
                    boxShadow="md"
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        maxW="80px"
                        maxH="32px"
                        objectFit="contain"
                      />
                    )}
                  </Box>

                  {/* CARD */}
                  <Box
                    bg={cardBg}
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                  >
                    <Flex justify="space-between" align="center" flexWrap="wrap">
                      <Heading size="md">{exp.company}</Heading>
                      <Text fontSize="md" color={muted}>
                        {exp.date}
                      </Text>
                    </Flex>

                    <Divider my={4} />

                    <Text fontSize="md" color={muted} mb={4}>
                      {exp.position} · {exp.location}
                    </Text>

                    <List spacing={3} pl={5} styleType="disc">
                      {exp.experience.map((item, i) => (
                        <ListItem
                          key={i}
                          fontSize={{ base: 'md', md: 'lg' }} // ≈ 1.6rem
                          fontWeight="300"
                        >
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </MotionBox>
              ))}

              {/* EDUCATION */}
              <Box pt={10}>
                <Heading size="md" mb={8}>
                  Education
                </Heading>

                <Stack spacing={10}>
                  {/* ALX */}
                  <MotionBox
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md">
                      <Flex justify="space-between" align="center" flexWrap="wrap">
                        <Heading size="md">ALX Africa · Nairobi</Heading>
                        <Text fontSize="md" color={muted}>
                          Mar 2022 – May 2023
                        </Text>
                      </Flex>

                      <Divider my={4} />

                      <Text fontSize="md" color={muted} mb={3}>
                        Software Engineering
                      </Text>

                      <List spacing={3} pl={5} styleType="disc">
                        <ListItem fontSize={{ base: 'md', md: 'lg' }} fontWeight="300">
                          Full-stack Software Engineering program with backend specialization,
                          focusing on scalable systems, APIs, and real-world problem solving.
                        </ListItem>
                      </List>
                    </Box>
                  </MotionBox>

                  {/* KCA */}
                  <MotionBox
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md">
                      <Flex justify="space-between" align="center" flexWrap="wrap">
                        <Heading size="md">KCA University · Nairobi</Heading>
                        <Text fontSize="md" color={muted}>
                          Mar 2015 – Aug 2018
                        </Text>
                      </Flex>

                      <Divider my={4} />

                      <Text fontSize="md" color={muted} mb={3}>
                        Diploma in Information Technology
                      </Text>

                      <List spacing={3} pl={5} styleType="disc">
                        <ListItem fontSize={{ base: 'md', md: 'lg' }} fontWeight="300">
                          Comprehensive IT training in software development, databases,
                          networking, cybersecurity, systems analysis, and web technologies.
                        </ListItem>
                      </List>
                    </Box>
                  </MotionBox>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Box>

      {/* PRINT / PDF OPTIMIZATION */}
      <style>
        {`
          @media print {
            #resume {
              background: white !important;
              padding: 0 !important;
            }
            #resume * {
              color: black !important;
              box-shadow: none !important;
            }
          }
        `}
      </style>
    </Box>
  );
}

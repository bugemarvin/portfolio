import {
  Box,
  Flex,
  Stack,
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

  const workExperiences = Experience.filter(e => !e.type || e.type !== 'education');
  const educationExperiences = Experience.filter(e => e.type === 'education');

  return (
    <Box as="section" id="resume" w="100%" bg={bg} py={{ base: 12, md: 20 }}>
      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 12 }}>
        <Text
          fontSize={{ base: '2rem', md: '3rem' }}
          fontWeight="700"
          textAlign="center"
          mb={{ base: 12, md: 16 }}
          color="#343a40"
        >
          Resume
        </Text>

        <Flex direction={{ base: 'column', lg: 'row' }} align="flex-start" gap={12}>
          {/* Sticky Side Title */}
          <Box
            position={{ base: 'relative', lg: 'sticky' }}
            top={{ lg: '120px' }}
            minW={{ lg: '200px' }}
            mb={{ base: 8, lg: 0 }}
            display={{ base: 'none', lg: 'block' }}
          >
            <Text fontSize={{ base: '1.5rem', md: '2rem' }} fontWeight="600">
              Experience
            </Text>
          </Box>

          {/* Timeline */}
          <Box position="relative" w="100%">
            {/* Vertical line */}
            <Box
              position="absolute"
              left={{ base: '20px', sm: '30px', md: '60px' }}
              top="0"
              bottom="0"
              w="2px"
              bg={lineColor}
            />

            <Stack spacing={{ base: 8, md: 12 }}>
              {/* Work Experience */}
              {workExperiences.map((exp, index) => (
                <MotionBox
                  key={`${exp.company}-${exp.date}`}
                  position="relative"
                  pl={{ base: '60px', sm: '72px', md: '120px' }}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  {/* Timeline Dot */}
                  <Box
                    position="absolute"
                    left={{ base: '8px', sm: '20px', md: '48px' }}
                    top="38px"
                    w="12px"
                    h="12px"
                    bg="blue.500"
                    borderRadius="full"
                    zIndex={2}
                  />

                  {/* Card */}
                  <Box
                    bg={cardBg}
                    p={{ base: 4, md: 6 }}
                    borderRadius="lg"
                    boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                  >
                    {/* Logo + Heading */}
                    <Flex justify="space-between" align="center" flexWrap="wrap">
                      <Flex align="center" gap={4}>
                        {exp.logo && (
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            boxSize={{ base: '32px', sm: '36px', md: '40px' }}
                            objectFit="contain"
                            borderRadius="12%"
                            mr={{ base: 0, md: '0.5rem' }}
                            display={{ base: 'none', md: 'block' }}
                          />
                        )}
                        <Text
                          fontSize={{ base: '1.8rem', md: '2.4rem' }}
                          fontWeight="700"
                          color="#343a40"
                        >
                          {exp.company}
                        </Text>
                      </Flex>

                      <Text fontSize={{ base: '1rem', md: '1.2rem' }} color={muted}>
                        {exp.date}
                      </Text>
                    </Flex>

                    <Divider my={{ base: 3, md: 4 }} />

                    <Text
                      fontSize={{ base: '1.4rem', md: '1.6rem' }}
                      color={muted}
                      mb={4}
                    >
                      {exp.position} · {exp.location}
                    </Text>

                    <List spacing={3} pl={5} styleType="disc">
                      {exp.experience.map((item, i) => (
                        <ListItem
                          key={i}
                          fontSize={{ base: '1.4rem', md: '1.6rem' }}
                          fontWeight="300"
                        >
                          {item}
                        </ListItem>
                      ))}
                    </List>

                    {exp.metrics && (
                      <Text mt={4} fontSize={{ base: '1.2rem', md: '1.4rem' }} color="gray.500">
                        Key Metrics: {exp.metrics.join(', ')}
                      </Text>
                    )}
                  </Box>
                </MotionBox>
              ))}

              {/* Education */}
              {educationExperiences.length > 0 && (
                <Box pt={{ base: 8, md: 10 }}>
                  <Text fontSize={{ base: '1.8rem', md: '2rem' }} fontWeight="600" mb={8}>
                    Education
                  </Text>

                  <Stack spacing={{ base: 6, md: 10 }}>
                    {educationExperiences.map((edu, idx) => (
                      <MotionBox
                        key={edu.institution}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                      >
                        <Box
                          bg={cardBg}
                          p={{ base: 4, md: 6 }}
                          borderRadius="lg"
                          boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                        >
                          <Flex justify="space-between" align="center" flexWrap="wrap">
                            <Flex align="center" gap={4}>
                              {edu.logo && (
                                <Image
                                  src={edu.logo}
                                  alt={`${edu.institution} logo`}
                                  boxSize={{ base: '32px', sm: '36px', md: '40px' }}
                                  objectFit="contain"
                                  borderRadius="12%"
                                  mr={{ base: 0, md: '0.5rem' }}
                                  display={{ base: 'none', md: 'block' }}
                                />
                              )}
                              <Text
                                fontSize={{ base: '1.8rem', md: '2.4rem' }}
                                fontWeight="700"
                                color="#343a40"
                              >
                                {edu.institution} · {edu.location}
                              </Text>
                            </Flex>
                            <Text fontSize={{ base: '1rem', md: '1.2rem' }} color={muted}>
                              {edu.date}
                            </Text>
                          </Flex>

                          <Divider my={{ base: 3, md: 4 }} />

                          <Text
                            fontSize={{ base: '1.4rem', md: '1.6rem' }}
                            color={muted}
                            mb={3}
                          >
                            {edu.degree}
                          </Text>

                          <List spacing={3} pl={5} styleType="disc">
                            {edu.details.map((d, i) => (
                              <ListItem
                                key={i}
                                fontSize={{ base: '1.4rem', md: '1.6rem' }}
                                fontWeight="300"
                              >
                                {d}
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      </MotionBox>
                    ))}
                  </Stack>
                </Box>
              )}
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

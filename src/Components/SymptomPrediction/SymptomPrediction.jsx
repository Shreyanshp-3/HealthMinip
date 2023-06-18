import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const symptoms = [
  { id: 1, name: "Abdominal Pain (Stomach Pain), Long-term" },
  { id: 2, name: "Abdominal Pain (Stomach Pain), Short-term" },
  { id: 3, name: "Ankle Problem" },
  // Add more symptoms as needed
];

const diseasesData = {
  "Abdominal Pain (Stomach Pain), Long-term": ["Does your pain get worse after you eat a big meal?", "Do you feel pressure in your upper abdomen that gets worse when you bend over or lie down at night?", "Is the pain relieved by antacids? Is your pain improved by eating?", "Does the pain start in your upper middle or upper right abdomen, and is it brought on by greasy or fatty foods?", "Has your appetite decreased? Have you lost 10 to 15 pounds over the past few months without trying?", "Do your skin or eyes have a yellow color, or is your urine dark, or are your stools turning white?"],

  "Abdominal Pain (Stomach Pain), Short-term": ["Do you have abdominal pain that is severe", "Are you pregnant, or do you believe you might be pregnant?", "Is your stomach very tender to touch? Does it hurt when you are driving and hit a bump or a pothole in the road?", "Do you have a sudden sharp pain that starts in the back near the ribs and moves down toward the groin?", "Do you have a mild pain, discomfort, or a feeling of pressure in the lower abdomen along with a burning sensation when you urinate?", "Do you have pain or a burning sensation in the upper abdomen that is either relieved or gets worse when you eat?", "Do you have watery diarrhea, fever, muscle aches, chills, nausea, or vomiting?"],

  "Ankle Problem": ["Did you begin to have pain and/or swelling after the ankle was hit?", "Is the ankle significantly swollen, and is the pain so intense that you can’t put weight on that foot?", "Is the ankle swollen and bruised, and can you still put weight on that foot?", "Do you have a fever, and is one or more of your joints painful, swollen, and red?", "Did the pain start suddenly, and is it painful when clothing or bedding rubs against your ankle?","Do you usually feel pain before or during a change in the weather, and/or are you experiencing swelling, stiffness, and pain that gets worse during or after you use your ankle?"],
  "Symptom 3": ["Disease G", "Disease H", "Disease I"],
  "Symptom 3": ["Disease G", "Disease H", "Disease I"],
  "Symptom 3": ["Disease G", "Disease H", "Disease I"],
  "Symptom 3": ["Disease G", "Disease H", "Disease I"],
  // Add more symptom-disease mappings as needed
};

const treatmentData = {
  "Does your pain get worse after you eat a big meal?": {
    heading: "Your problem may be a HIATAL HERNIA.",
    content: "See your doctor. Eat more frequent, but smaller meals. Avoid eating 2-3 hours before bed. Don’t lie down right after you eat. Elevate the head of your bed with textbooks, boards, or bricks under the headboard or front feet of your bed to reduce discomfort.",
  },
  "Do you feel pressure in your upper abdomen that gets worse when you bend over or lie down at night?": {
    heading: "Your problem may be a HIATAL HERNIA.",
    content: "See your doctor. Eat more frequent, but smaller meals. Avoid eating 2-3 hours before bed. Don’t lie down right after you eat. Elevate the head of your bed with textbooks, boards, or bricks under the headboard or front feet of your bed to reduce discomfort.",
  },
  "Is the pain relieved by antacids? Is your pain improved by eating?": {
    heading: "Your pain may be from GASTRITIS, an ULCER, or HEARTBURN. All are irritations of the stomach and esophagus.",
    content: "Eat smaller meals and use an over-the-counter antacid. If antacids don’t help and/or you find yourself using them more days than not in the average week, see your doctor.",
  },
  "Does the pain start in your upper middle or upper right abdomen, and is it brought on by greasy or fatty foods?": {
    heading: "Your pain may be a sign of GALLSTONES or CHOLECYSTITIS (inflammation or infection of the gallbladder).",
    content: "See your doctor.",
  },
  "Has your appetite decreased? Have you lost 10 to 15 pounds over the past few months without trying?": {
    heading: "Unintentional weight loss can be a sign of a serious condition, such as CANCER.",
    content: "See your doctor.",
  },
  "Do your skin or eyes have a yellow color, or is your urine dark, or are your stools turning white?": {
    heading: "You may have HEPATITIS, a serious infection of the liver.",
    content: "See your doctor.",
  },
  "Do you have abdominal pain that is severe": {
    heading: "In pregnant women, lower abdominal or pelvic pain along with vaginal bleeding may be a sign of a serious condition, such as ECTOPIC PREGNANCY or MISCARRIAGE.",
    content: "Call your doctor right away or go to the emergency room if you are less than 20 weeks pregnant. Go to the labor and delivery department if you are over 20 weeks pregnant.",
  },
  "Are you pregnant, or do you believe you might be pregnant?": {
    heading: "In pregnant women, lower abdominal or pelvic pain along with vaginal bleeding may be a sign of a serious condition, such as ECTOPIC PREGNANCY or MISCARRIAGE.",
    content: "Call your doctor right away or go to the emergency room if you are less than 20 weeks pregnant. Go to the labor and delivery department if you are over 20 weeks pregnant.",
  },
  "Is your stomach very tender to touch? Does it hurt when you are driving and hit a bump or a pothole in the road?": {
    heading: "These may be signs of a serious problem, such as APPENDICITIS OR PERFORATED APPENDIX INFECTIOUS DIARRHEA DIVERTICULITIS or ULCER PANCREATITIS BOWEL BLOCKAGE",
    content: "Call your doctor right away or go the hospital.",
  },
  "Do you have a sudden sharp pain that starts in the back near the ribs and moves down toward the groin?": {
    heading: "Your pain may be from a KIDNEY STONE or KIDNEY TUMOR. If you have a fever, you may have a KIDNEY or BLADDER INFECTION.",
    content: "Call your doctor right away or go the hospital.",
  },
  "Do you have a mild pain, discomfort, or a feeling of pressure in the lower abdomen along with a burning sensation when you urinate?": {
    heading: "CYSTITIS, an infection of the urinary tract, can be painful and cause abdominal discomfort.",
    content: "See your doctor promptly.",
  },
  "Do you have pain or a burning sensation in the upper abdomen that is either relieved or gets worse when you eat?": {
    heading: "This may be from GASTRITIS, an irritation of the stomach, or from an ULCER.",
    content: "Try taking an over-the-counter antacid on a regular basis. See your doctor if an antacid doesn’t help, if the pain comes back quickly after taking one, or if you are taking an antacid most days of an average week.",
  },
  "Do you have watery diarrhea, fever, muscle aches, chills, nausea, or vomiting?": {
    heading: "You may have GASTROENTERITIS, commonly called the stomach flu. Severe cases of gastroenteritis can lead to dehydration in infants and young children.",
    content: "Take over-the-counter fever-reducing medicines. (Don’t give children aspirin.) Drink water throughout the day/night. Call your doctor if vomiting and diarrhea persist for more than 2 days, or if you see any blood or mucus in the diarrhea. Call your doctor if you experience DEHYDRATION with such symptoms as lethargy, dry mouth, and/or decreased urination.",
  },
  // ANKLE PROBLEMS AND THEIR SOLUTIONS
  "Did you begin to have pain and/or swelling after the ankle was hit": {
    heading: "Treatment ",
    content: "Treatment for this is we have to give it some time to recover from the damage it has got",
  },
  "Is the ankle significantly swollen, and is the pain so intense that you can’t put weight on that foot?": {
    heading: "You may have a FRACTURE or a severe SPRAIN.",
    content: "See your doctor promptly. Don’t put weight on the injured ankle.    Raise the ankle above your heart while sitting or lying down. Use a compression wrap to help control swelling. Place an ice pack wrapped in a thin, damp cloth on the swollen area. You can also consider using a soft compression brace and crutches",
  },
  "Is the ankle swollen and bruised, and can you still put weight on that foot?": {
    heading: "You may have a SPRAINED ANKLE or a FRACTURE OF THE FIBULA.",
    content: "Raise the ankle above your heart while sitting or lying down. Use a compression wrap to help control swelling. Place an ice pack wrapped in a thin, damp cloth on the swollen area. You can also consider using a soft compression brace and crutches.",
  },
  "Do you have a fever, and is one or more of your joints painful, swollen, and red?": {
    heading: "Fever and a painful, red, swollen joint may be caused by an INFECTED JOINT (also called SEPTIC ARTHRITIS). More than one affected joint may be caused by RHEUMATIC FEVER.",
    content: "URGENT",
  },
  "Did the pain start suddenly, and is it painful when clothing or bedding rubs against your ankle?": {
    heading: "You may have GOUT (swelling and pain caused by too much uric acid in your body).",
    content: "See your doctor. During a gout attack (also called a flare), rest in bed until the pain eases up. Apply an ice pack wrapped in a thin, damp cloth to your ankle. Drink extra water to help flush uric acid from your body.    Avoid alcohol and high-fat foods. They can trigger gout attacks.",
  },
  "Do you usually feel pain before or during a change in the weather, and/or are you experiencing swelling, stiffness, and pain that gets worse during or after you use your ankle?": {
    heading: "These symptoms may be caused by OSTEOARTHRITIS (also called DEGENERATIVE JOINT DISEASE). Previous surgery or trauma to the ankle can also cause these symptoms.",
    content: "See your doctor. If you have osteoarthritis, he or she can treat your symptoms with a combination of therapies.    Relieve your symptoms by applying a heating pad or an ice pack wrapped in a thin, damp cloth to your ankle. Use nonsteroidal anti-inflammatory drugs (NSAIDs) to ease the pain.",
  },
  "Disease I": {
    heading: "Treatment for Disease I",
    content: "Treatment for Disease I",
  },
  "Disease I": {
    heading: "Treatment for Disease I",
    content: "Treatment for Disease I",
  },
  "Disease I": {
    heading: "Treatment for Disease I",
    content: "Treatment for Disease I",
  },
  "Disease I": {
    heading: "Treatment for Disease I",
    content: "Treatment for Disease I",
  },
  "Disease I": {
    heading: "Treatment for Disease I",
    content: "Treatment for Disease I",
  },
  // Add more disease-treatment mappings as needed
};

function App() {
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [associatedDiseases, setAssociatedDiseases] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState("");
  const [treatment, setTreatment] = useState("");

  const handleSymptomChange = (symptom) => {
    setSelectedSymptom(symptom);
    setAssociatedDiseases(diseasesData[symptom]);
    setSelectedDisease("");
    setTreatment("");
  };

  const handleDiseaseClick = (disease) => {
    setSelectedDisease(disease);
    setTreatment(treatmentData[disease]);
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} align="stretch">
      <Box width={{ base: "100%", md: "33%" }} padding="2">
        <VStack align="stretch">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Select Symptom:
          </Text>
          {symptoms.map((symptom) => (
            <Box
              key={symptom.id}
              border={selectedSymptom === symptom.name ? "1px solid blue" : "none"}
              borderRadius="md"
              padding="2"
              onClick={() => handleSymptomChange(symptom.name)}
              _hover={{ cursor: "pointer", backgroundColor: "gray.100" }}
              transition="background-color 0.3s ease"
              _active={{ backgroundColor: "blue.200" }}
            >
              <Text>{symptom.name}</Text>
            </Box>
          ))}
        </VStack>
      </Box>

      <Box width={{ base: "100%", md: "33%" }} padding="2">
        <VStack align="stretch">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Associated Diseases:
          </Text>
          {associatedDiseases.length > 0 ? (
            associatedDiseases.map((disease) => (
              <Box
                key={disease}
                border={selectedDisease === disease ? "1px solid blue" : "none"}
                borderRadius="md"
                padding="2"
                onClick={() => handleDiseaseClick(disease)}
                _hover={{ cursor: "pointer", backgroundColor: "gray.100" }}
                transition="background-color 0.3s ease"
                _active={{ backgroundColor: "blue.200" }}
              >
                <Text>{disease}</Text>
              </Box>
            ))
          ) : (
            <Text>No associated diseases</Text>
          )}
        </VStack>
      </Box>

      <Box width={{ base: "100%", md: "33%" }} padding="2">
        <VStack align="stretch">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Treatment:
          </Text>
          {treatment ? (
            <>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                DIAGNOSIS
              </Text>
              <Text fontSize="lg" fontWeight="" mb={2}>
                {treatment.heading}
              </Text>
              <Text fontSize="lg" fontWeight="BOLD" mb={2}>
                SELF CARE
                {/* {treatment.heading} */}
              </Text>

              <Text>
                {treatment.content}
              </Text>
            </>
          ) : (
            <Text>No treatment available</Text>
          )}
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;

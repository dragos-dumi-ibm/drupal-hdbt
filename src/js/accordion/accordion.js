import HelfiAccordion from './helfi-accordion';
import {createListOfUniqueIds} from './unique-id';



const accordionElements = document.querySelectorAll('.helfi-accordion-item');

// Add suffix to duplicate ids.
const uniqueListOfIds = createListOfUniqueIds([...accordionElements]);
accordionElements.forEach((element, index) => {
  element.setAttribute('id', uniqueListOfIds[index]);
});


// Initialize the accordions
window.helfiAccordions = [];
document.querySelectorAll(`.${HelfiAccordion.accordionWrapper}`).forEach((accordionElement) => {
  const accordion = new HelfiAccordion(accordionElement, uniqueListOfIds);
  window.helfiAccordions.push(accordion);
});


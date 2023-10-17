import { useEffect } from "react";

function useDisableDatesOutsideRange(focusedElement, dataId, selectedStartMonthData, selectedEndMonthData, isStartPickerOpen, isEndPickerOpen) {
  useEffect(() => {
    if (focusedElement === dataId) {
      disableDateButtons(selectedStartMonthData, selectedEndMonthData, isStartPickerOpen, isEndPickerOpen);
    }
  }, [focusedElement, dataId, selectedStartMonthData, selectedEndMonthData, isStartPickerOpen, isEndPickerOpen])
}

function disableDateButtons(selectedStartMonthData, selectedEndMonthData, isStartPickerOpen, isEndPickerOpen) {
  if (isStartPickerOpen) {
    disableStartPickerButtons(selectedEndMonthData);
  }
  if (isEndPickerOpen) {
    disableEndPickerButtons(selectedStartMonthData);
  }
}

function disableStartPickerButtons(selectedEndMonthData) {
  const monthPicker = document.querySelector('._pickerContainer_ual9t_39');
  let currentPage = parseInt(monthPicker.querySelector('._bold1_ual9t_59').innerText);
  const previousYearArrow = monthPicker.querySelector('[aria-label="Previous Year"]');
  const nextYearArrow = monthPicker.querySelector('[aria-label="Next Year"]');

  disableStartPickerYears(selectedEndMonthData, monthPicker, currentPage, nextYearArrow, previousYearArrow);
  disableStartPickerMonths(currentPage, monthPicker, selectedEndMonthData, nextYearArrow, previousYearArrow);
}

function disableEndPickerButtons(selectedStartMonthData) {
  const monthPicker = document.querySelector('._pickerContainer_ual9t_39');
  let currentPage = parseInt(monthPicker.querySelector('._bold1_ual9t_59').innerText);
  const previousYearArrow = monthPicker.querySelector('[aria-label="Previous Year"]');
  const nextYearArrow = monthPicker.querySelector('[aria-label="Next Year"]');

  disableEndPickerYears(selectedStartMonthData, monthPicker, currentPage, nextYearArrow, previousYearArrow);
  disableEndPickerMonths(currentPage, monthPicker, selectedStartMonthData, nextYearArrow, previousYearArrow);
}

function disableStartPickerYears(selectedEndMonthData, monthPicker, currentPage, nextYearArrow, previousYearArrow) {
  currentPage === selectedEndMonthData.year ? nextYearArrow.disabled = true : nextYearArrow.disabled = false;

  previousYearArrow.addEventListener('click', () => {
    currentPage = parseInt(monthPicker.querySelector('._bold1_ual9t_59').innerText) - 1;
    currentPage === selectedEndMonthData.year  ? nextYearArrow.disabled = true : nextYearArrow.disabled = false;
  });
  nextYearArrow.addEventListener('click', () => {
    currentPage = parseInt(monthPicker.querySelector('._bold1_ual9t_59').innerText) + 1;
    currentPage === selectedEndMonthData.year ? nextYearArrow.disabled = true : nextYearArrow.disabled = false;
  });
}

function disableEndPickerYears(selectedStartMonthData, monthPicker, currentPage, nextYearArrow, previousYearArrow) {
  currentPage === selectedStartMonthData.year ? previousYearArrow.disabled = true : previousYearArrow.disabled = false;

  previousYearArrow.addEventListener('click', () => {
    currentPage = parseInt(monthPicker.querySelector('._bold1_ual9t_59').innerText) - 1;
    currentPage === selectedStartMonthData.year ? previousYearArrow.disabled = true : previousYearArrow.disabled = false;
  });
  nextYearArrow.addEventListener('click', () => {
    currentPage = parseInt(monthPicker.querySelector('._bold1_ual9t_59').innerText) + 1;
    currentPage === selectedStartMonthData.year ? previousYearArrow.disabled = true : previousYearArrow.disabled = false;
  });
}

function disableStartPickerMonths(currentPage, monthPicker, selectedEndMonthData, nextYearArrow, previousYearArrow) {
  const months = monthPicker.querySelectorAll('._month_ual9t_3');

  if (currentPage === selectedEndMonthData.year) {
    for (let step = selectedEndMonthData.month; step <= 11; step++) {
      months[step].disabled = true;
    }
  }

  previousYearArrow.addEventListener('click', () => {
    currentPage = parseInt(monthPicker.querySelector('._bold1_ual9t_59').innerText) - 1;
    if (currentPage === selectedEndMonthData.year) {
      for (let step = selectedEndMonthData.month; step <= 11; step++) {
        months[step].disabled = true;
      }
    } else {
      for (let step = selectedEndMonthData.month; step <= 11; step++) {
        months[step].disabled = false;
      }
    }
  });

  nextYearArrow.addEventListener('click', () => {
    currentPage = parseInt(monthPicker.querySelector('._bold1_ual9t_59').innerText) + 1;
    if (currentPage === selectedEndMonthData.year) {
      for (let step = selectedEndMonthData.month; step <= 11; step++) {
        months[step].disabled = true;
      }
    } else {
      for (let step = selectedEndMonthData.month; step <= 11; step++) {
        months[step].disabled = false;
      }
    }
  });
}

function disableEndPickerMonths(currentPage, monthPicker, selectedStartMonthData, nextYearArrow, previousYearArrow) {
  const months = monthPicker.querySelectorAll('._month_ual9t_3');

  if (currentPage === selectedStartMonthData.year) {
    for (let step = selectedStartMonthData.month - 2; step >= 0; step--) {
      months[step].disabled = true;
    }
  }

  previousYearArrow.addEventListener('click', () => {
    currentPage = parseInt(monthPicker.querySelector('._bold1_ual9t_59').innerText) - 1;
    if (currentPage === selectedStartMonthData.year) {
      for (let step = selectedStartMonthData.month - 2; step >= 0; step--) {
        months[step].disabled = true;
      }
    } else {
      for (let step = selectedStartMonthData.month - 2; step >= 0; step--) {
        months[step].disabled = false;
      }
    }
  });

  nextYearArrow.addEventListener('click', () => {
    currentPage = parseInt(monthPicker.querySelector('._bold1_ual9t_59').innerText) + 1;
    if (currentPage === selectedStartMonthData.year) {
      for (let step = selectedStartMonthData.month - 2; step >= 0; step--) {
        months[step].disabled = true;
      }
    } else {
      for (let step = selectedStartMonthData.month - 2; step >= 0; step--) {
        months[step].disabled = false;
      }
    }
  });
}

export default useDisableDatesOutsideRange;

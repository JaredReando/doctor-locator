function getPhoneNumber(practices) {
  const allPhoneNumbers = practices[0].phones;
  let phoneNumber = '';
  allPhoneNumbers.forEach(function(phone) {
    if(phone.type === 'landline') {
      phoneNumber = phone.number
    }
  });
  let phoneArray = phoneNumber.split('');
  phoneArray.splice(0,0,'(');
  phoneArray.splice(4,0,') ');
  phoneArray.splice(8,0,'-');
  phoneNumber = phoneArray.join('');
  return phoneNumber;
}

function getWebsite(practices) {
  const website = practices[0].website;
  return website;
}


function getAddress(practices) {
  const street = practices[0].visit_address.street;
  const city = practices[0].visit_address.city;
  const state = practices[0].visit_address.state;
  const zip = practices[0].visit_address.zip;
  const address = `${street} ${city}, ${state} ${zip}`;

  return address;
}

function getAvailability(practices) {
  const availability = practices[0].accepts_new_patients;
  if(availability) {
    return "Yes";
  } else {
    return "No";
  }
}

function doctorInfo(data) {
  const firstName = data.profile.first_name;
  const lastName = data.profile.last_name;
  const fullName = `${firstName} ${lastName}`;
  const imageURL = data.profile.image_url;
  const address = getAddress(data.practices);
  const website = getWebsite(data.practices);
  const availability = getAvailability(data.practices);
  const phoneNumber = getPhoneNumber(data.practices);
  const allInfo = {imageURL: imageURL, name: fullName, address: address, phone: phoneNumber, availability: availability};

  return allInfo;

}

export {getPhoneNumber, getWebsite, getAddress, getAvailability, doctorInfo};

export function listItem(hash) {

  let resultHTML =

  `<tr>
      <th scope='row'>${hash.id}</th>
      <td><img src="${hash.imageURL}" alt="${hash.name}"></td>
      <td>${hash.name}</td>
      <td>${hash.address}</td>
      <td>${hash.phone}</td>
      <td>${hash.availability}</td>
  </tr>`
  return resultHTML;
}

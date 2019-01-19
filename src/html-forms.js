export function listItem(hash) {

  let resultHTML =

  `<tr>
      <td>${hash.name}</td>
      <td>${hash.address}</td>
      <td>${hash.phone}</td>
      <td>${hash.website}</td>
      <td>${hash.availability}</td>
      <td>
  </tr>`
  return resultHTML;
}

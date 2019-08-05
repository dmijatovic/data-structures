
import Student from './Student'

describe('Student',()=>{
  test ('Creates class',()=>{
    let st = new Student("dusan","mijatovic",1970)
    expect(st).toBeTruthy()
  })
  test('Has proper first & last name',()=>{
    let st = new Student("dusan","mijatovic",1970)
    expect(st.firstName).toEqual("dusan")
    expect(st.lastName).toEqual('mijatovic')
  })
  test('Has testStaticMethod that returns "works"',()=>{
    expect(Student.testStaticMethod())
      .toContain('works')
    })
})
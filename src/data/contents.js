let contents = [
  {
    title: 'Array.filter()',
    type: 'pure',
    description: 'เป็นการกรองข้อมูลใน array ด้วยเงื่อนไขที่กำหนด',
    examples: [
      {
        code: '/* ลองแก้ code ดูได้เลย */\nemojis.filter(\n\temoji => emoji === "🐶")\n/* แล้วก็กดปุ่ม ▶ Run ด้านล่างนี้ */'
      },
      {
        code: 'emojis.filter(\n\temoji => emoji >= "🐶")'
      },
      {
        code: 'users.filter(\n\tuser => user.age > 13)'
      },
      {
        code: 'users.filter(\n\tuser => user.gender === "female")'
      },
      {
        code: 'products.filter(\n\tproduct => product.price < 20000)'
      },
      {
        code: 'products.filter(\n\tproduct => product.price > 20000 \n\t&& product.price < 30000)'
      }
    ]
  },
  {
    title: 'Array.find()',
    type: 'pure',
    description: 'การทำงานจะคล้ายกับ filter แต่จะเป็นการหาข้อมูลใน array ด้วยเงื่อนไขที่กำหนด และจะ return ผลลัพท์ตัวแรกที่หาเจอออกมาเท่านั้น',
    examples: [
      {
        code: 'emojis.find(\n\temoji => emoji === "🐶")'
      },
      {
        code: 'users.find(\n\tuser => user.age > 13)'
      },
      {
        code: 'products.find(\n\tproduct => product.price < 20000)'
      }
    ]
  },
  {
    title: 'Array.map()',
    type: 'pure',
    description: 'เป็นการสร้าง array ขึ้นมาใหม่จาก array เดิมโดย array ใหม่นั้นจะมีค่าจากการ return ค่าของ function ที่เราส่งเข้าไป',
    examples: [
      {
        code: 'emojis.map(\n\temoji => \n\t\t\'Char code of \' + emoji + \' is \' + emoji.codePointAt(0))'
      },
      {
        code: 'users.map(\n\tuser => user)'
      },
      {
        code: 'users.map(\n\tuser => user.gender)'
      },
      {
        code: 'users.map(\n\tuser => \n\t\tuser.name + \' age \' + user.age)'
      },
      {
        code: 'users.map(\n\tuser => user.gender).length'
      }
    ]
  },
  {
    title: 'Array.reduce()',
    type: 'pure',
    description: 'ในแต่ละรอบของการทำงาน ค่าที่ถูก return จาก callback จะถูกสะสมไปเรื่อยๆ และ return ค่าสุดท้ายออกมา',
    examples: [
      {
        code: 'users.reduce(\n\t(previousValue, currentValue) => \n\t\tpreviousValue + currentValue.age, 0)'
      },
      {
        code: 'users.reduce(\n\t/* ลองเปลี่ยนชื่อ params */\n\t(sumAge, user) => \n\t\tsumAge + user.age, 0)'
      },
      {
        code: 'emojis.reduce(\n\t(result, emoji) => \n\t\tresult + \'💥\' + emoji, "")'
      },
      {
        code: 'products.reduce(\n\t(sumPrice, product) => \n\t\tsumPrice + product.price, 0)'
      }
    ]
  },
  {
    title: 'Array.filter().map()',
    description: 'เราสามารถเอามันมาต่อกันได้ด้วย',
    examples: [
      {
        code: 'users.filter(\n\tuser => \n\t\tuser.gender === \'female\')\n\t\t\t.map(user => user.username)'
      }
    ]
  },
  {
    title: 'Array.sort()',
    type: 'impure',
    description: 'เป็นการเรียงลำดับค่าของ Array สามารถกำหนดเงื่อนไขการเรียงลำดับได้',
    examples: [
      {
        code: 'emojis.sort()'
      },
      {
        code: 'users.sort()'
      },
      {
        code: 'products.sort()'
      },
      {
        code: '/*เรียงตาม name*/\nusers.sort((a, b) => (a.name - b.name))'
      },
      {
        code: '/*เรียงตาม price*/\nproducts.sort((a, b) => (a.price - b.price))'
      }
    ]
  },
  {
    title: 'Array.reverse()',
    type: 'impure',
    description: 'เป็นการกลับการเรียงลำดับของ Array ค่าภายใน Array ยังอยู่เหมือนเดิม แค่กลับการเรียงลำดับเท่านั้น',
    examples: [
      {
        code: 'emojis.reverse()'
      },
      {
        code: 'users.reverse()'
      },
      {
        code: 'products.reverse()'
      }
    ]
  },
  {
    title: 'Array.push()',
    type: 'impure',
    description: 'เป็นการ Insert ค่าที่ส่งไปใน Params เข้าไปต่อท้าย Array โดยจะ return ค่าออกมาเป็นขนาดของ Array หลังจากทำงานเสร็จแล้ว',
    examples: [
      {
        code: 'emojis.push(\'💥\')'
      },
      {
        code: 'emojis.push(\'⚽\', \'🏀\')'
      },
      {
        code: '/* สังเกต Code นี้ดีๆ */\nemojis.push([\'🔫\', \'💣\', \'🔪\'])'
      }
    ]
  },
  {
    title: 'Array.shift()',
    type: 'impure',
    description: 'เป็นการลบค่าลำดับเเรกของ Array ต้นฉบับออก และ Return ค่านั้นออกมา',
    examples: [
      {
        code: 'emojis.shift()'
      },
      {
        code: 'users.shift()'
      },
      {
        code: 'products.shift()'
      }
    ]
  },
  {
    title: 'Array.pop()',
    type: 'impure',
    description: 'เป็นการลบค่าลำดับสุดท้ายของ Array ต้นฉบับออก และ Return ค่านั้นออกมา',
    examples: [
      {
        code: 'emojis.pop()'
      },
      {
        code: 'users.pop()'
      },
      {
        code: 'products.pop()'
      }
    ]
  },
  {
    title: 'Array.splice()',
    type: 'impure',
    description: 'เป็นการค่าของ Array โดยการลบหรือแทรกค่าใหม่ลงไปยังตำแหน่งที่ต้องการ',
    examples: [
      {
        code: '/*แทรกค่าลงไปยังตำแหน่งที่ 2*/\n emojis.splice(2, 0,\n\t "👍", "👊", "✊", "✌️", "👌", "✋")'
      },
      {
        code: '/*วางค่าลงไปแทนตำแหน่งที่ 2 - 4*/\n emojis.splice(2, 3,\n\t "👍", "👊", "✊")'
      },
      {
        code: '/*ลบค่าตำแหน่งที่ 2 - 3*/\n users.splice(2, 2)'
      }
    ]
  },
  {
    title: 'Array.join()',
    type: 'pure',
    description: 'เป็นการรวมค่าภายใน Array แล้วคืนกลับมาเป็นข้อความ',
    examples: [
      {
        code: 'emojis.join()'
      },
      {
        code: 'emojis.join("|")'
      }
    ]
  }
]
export default contents

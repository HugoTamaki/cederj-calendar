# encoding: utf-8

require 'google_drive'
require 'csv'
require 'json'

desc "Reads csv info and shots them to data folder"
task :read_csv do

  session = GoogleDrive::Session.from_config("config.json")

  files = {
    location: '',
    courses: '',
    disciplines: [
      ''
    ]
  }

  # Loading disciplines

  result = {
    disciplines: []
  }

  puts 'Loading disciplines...'

  files[:disciplines].each do |discipline_id|
    ws = session.spreadsheet_by_key(discipline_id).worksheets[0]

    (1..ws.num_rows).each do |index|
      row = ws.rows[index]

      if row
        hash_result = {}

        hash_result[:name]         = row[0]
        hash_result[:ap1_local]    = row[1]
        hash_result[:ap1_date]     = row[2]
        hash_result[:ap1_time]     = row[3]
        hash_result[:ap2_local]    = row[4]
        hash_result[:ap2_date]     = row[5]
        hash_result[:ap2_time]     = row[6]
        hash_result[:tutor]        = row[7]
        hash_result[:ap3_local]    = row[8]
        hash_result[:ap3_date]     = row[9]
        hash_result[:ap3_time]     = row[10]
        hash_result[:ad1_date]     = row[11]
        hash_result[:ad2_date]     = row[12]
        hash_result[:course]       = row[13]
        hash_result[:location]     = row[14]
        result[:disciplines]   << hash_result
      end

    end
  end

  File.open('data/disciplines.json', 'w:UTF-8') do |f|
    f.write(result.to_json)
  end

  # Loading courses

  result = {
    courses: []
  }

  ws = session.spreadsheet_by_key(files[:courses]).worksheets[0]

  puts 'Loading courses...'

  (1..ws.num_rows).each do |index|
    row = ws.rows[index]

    if row
      hash_result = {}

      hash_result[:name] = row[0]
      hash_result[:location] = row[1]
      result[:courses] << hash_result
    end
  end

  File.open('data/courses.json', 'w:UTF-8') do |f|
    f.write(result.to_json)
  end

  # Loading locations

  result = {
    locations: []
  }

  ws = session.spreadsheet_by_key(files[:location]).worksheets[0]

  puts 'Loading locations...'

  (1..ws.num_rows).each do |index|
    row = ws.rows[index]

    if row
      hash_result = {}

      hash_result[:name] = row[0]
      result[:locations] << hash_result
    end
  end

  File.open('data/locations.json', 'w:UTF-8') do |f|
    f.write(result.to_json)
  end
end